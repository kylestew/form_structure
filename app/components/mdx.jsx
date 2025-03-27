import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import ClientScript from './ClientScript'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

/*
function Table({ data }) {
    const headers = data.headers.map((header, index) => <th key={index}>{header}</th>)
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ))

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function CustomLink(props) {
    const { href, children, ...rest } = props

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...rest}>
                {children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...props} />
    }

    return (
        <a target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}

function RoundedImage(props) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
}
*/

function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
    const Heading = ({ children }) => {
        const slug = slugify(children)
        return React.createElement(
            `h${level}`,
            { id: slug },
            React.createElement('a', {
                href: `#${slug}`,
                key: `link-${slug}`,
                className: 'anchor',
            }),
            children
        )
    }

    Heading.displayName = `Heading${level}`
    return Heading
}

function Pre({ children, ...props }) {
    // Check if this is a special @meta exec code block
    // HACK: pretty specific to the syntax of the code blocks in the notes
    const code = children?.props?.children
    if (code?.startsWith('// @meta') && code.split(' ').includes('exec')) {
        // Don't render anything for @exec blocks
        return <>{children}</>
    }

    // Regular pre blocks continue as normal
    return <pre {...props}>{children}</pre>
}

const snippetCache = new Map()

function Code({ children, ...props }) {
    // check if the first line is begins with // @meta, parse for control instructions
    const rawCode = typeof children === 'string' ? children.trim() : ''
    const lines = rawCode.split('\n')
    const firstLine = lines[0].trim()
    const [_, ...commands] = firstLine.startsWith('// @meta') ? firstLine.split(' ').slice(1) : []

    // extract remaining lines after any command line
    let output = firstLine.startsWith('// @meta') ? lines.slice(1).join('\n') : rawCode

    // handle store command - save code to cache
    const store = commands.find((command) => command.startsWith('store:'))
    if (store) {
        const [_, name] = store.split(':')
        snippetCache.set(name, output)
    }

    // handle load commands - prepend cached code
    const loadCommands = commands.filter((command) => command.startsWith('load:'))
    for (const load of loadCommands) {
        const [_, name] = load.split(':')
        if (snippetCache.has(name)) {
            output = snippetCache.get(name) + '\n' + output
        }
    }

    // execute the code block if marked to do so - do not display
    const isExecutable = commands.includes('exec')
    if (isExecutable) {
        return <ClientScript code={output} />
    }

    // highlight the code block and display it
    if (!children) {
        return <code {...props} />
    }
    const codeHTML = highlight(output)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function Canvas({ id = 'myCanvas', width = 480, height = 480 }) {
    return <canvas id={id} width={width} height={height} className="border border-black-200 rounded-lg" />
}

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),

    // Image: RoundedImage,
    // a: CustomLink,
    // Table,

    // conditional code blocks
    pre: Pre,
    code: Code,

    Canvas,
}

export function CustomMDX(props) {
    return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}

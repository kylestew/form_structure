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
    // Check if this is a special @exec code block
    // HACK: pretty specific to the syntax of the code blocks in the notes
    if (children.props.children.startsWith('// @exec')) {
        // Don't render anything for @exec blocks
        return <>{children}</>
    }

    // Regular pre blocks continue as normal
    return <pre {...props}>{children}</pre>
}

function Code({ children, ...props }) {
    // check if the first line is // @exec or // @meta exec
    const rawCode = typeof children === 'string' ? children.trim() : ''
    const lines = rawCode.split('\n')
    const firstLine = lines[0].trim()

    // execute the code block if marked to do so - do not display
    const isExecutable = firstLine === '// @exec' || firstLine === '// @meta exec'
    if (isExecutable) {
        const code = lines.slice(1).join('\n') // strip the @exec line
        return <ClientScript code={code} />
    }

    // highlight the code block and display it
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function Canvas({ id = 'myCanvas' }) {
    return <canvas id={id} width={480} height={480} className="border border-black-200 rounded-lg" />
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

import fs from 'fs'
import path from 'path'

function parseFrontmatter(fileContent) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    let match = frontmatterRegex.exec(fileContent)
    if (!match) return { metadata: {}, content: fileContent.trim() }

    let frontMatterBlock = match[1]
    let content = fileContent.replace(frontmatterRegex, '').trim()
    let frontMatterLines = frontMatterBlock.trim().split('\n')
    let metadata = {}

    frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
        metadata[key.trim()] = value
    })

    return { metadata, content }
}

function getMDXFiles(dir) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx' && !file.startsWith('_'))
}

function readMDXFile(filePath) {
    let rawContent = fs.readFileSync(filePath, 'utf8')
    return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
    let mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        let filePath = path.join(dir, file)
        let { metadata, content } = readMDXFile(filePath)
        let slug = path.basename(file, path.extname(file))

        // Get file stats for dates
        let stats = fs.statSync(filePath)
        let createdAt = stats.birthtime.toISOString().split('T')[0]
        let updatedAt = stats.mtime.toISOString().split('T')[0]

        return {
            metadata: {
                ...metadata,
                createdAt,
                updatedAt,
            },
            slug,
            content,
        }
    })
}

export function getNotes() {
    return getMDXData(path.join(process.cwd(), 'app', 'notes', 'notes'))
}

export function formatImage(image) {
    return `/images/_notes/covers/${image}`
}

export function formatDate(dateStr, includeRelative = false) {
    const DAY_MS = 1000 * 60 * 60 * 24
    const now = new Date()
    const date = new Date(dateStr.includes('T') ? dateStr : `${dateStr}T00:00:00`)

    const diffMs = now - date
    const diffDays = Math.floor(diffMs / DAY_MS)

    let relative = 'Today'
    if (diffDays > 0) {
        if (diffDays < 30) {
            relative = `${diffDays}d ago`
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30)
            relative = `${months}mo ago`
        } else {
            const years = Math.floor(diffDays / 365)
            relative = `${years}y ago`
        }
    }

    const fullDate = date.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    return includeRelative ? `${fullDate} (${relative})` : fullDate
}

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
    return `/images/notes/covers/${image}`
}

export function formatDate(date, includeRelative = false) {
    let currentDate = new Date()
    if (!date.includes('T')) {
        date = `${date}T00:00:00`
    }
    let targetDate = new Date(date)

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    let daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate = ''

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    } else {
        formattedDate = 'Today'
    }

    let fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    if (!includeRelative) {
        return fullDate
    }

    return `${fullDate} (${formattedDate})`
}

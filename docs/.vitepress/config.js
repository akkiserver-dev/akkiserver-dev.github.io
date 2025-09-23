import fs from 'fs'
import path from 'path'

const server_names = {
    y2025: {
        sep_extra: "9月鯖番外編",
        sep_apocalypse: "ゾンビアポカリプス鯖"
    }
}

function getSidebarItems(dir, basePath, year) {
    year = year || 2025
    return fs.readdirSync(dir).map(file => {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            // フォルダなら再帰
            return {
                text: file,
                items: getSidebarItems(fullPath, basePath + '/' + file)
            }
        } else if (file.endsWith('.md')) {
            let names;
            if (year == 2025) {
                names = server_names.y2025
            } else if (year == 2024) {
                names = server_names.y2024
            }
            const name = file === 'index.md' ? '' : file.replace(/\.md$/, '')
            return { text: names[name] || name, link: basePath + '/' + name }
        }
    }).filter(Boolean)
}

export default {
    title: 'あっきーサーバー HP',
    description: '',
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: 'Wiki', link: '/wiki' },
        ],
        sidebar: {
            '/': [
                { text: 'ホーム', link: '/' },
                { text: 'このサーバーについて', link: '/about' },
                { text: 'Wiki', link: '/wiki' },
            ],
            '/wiki/': [
                {
                    text: 'Wiki',
                    link: '/wiki',
                    items: [
                        {
                            text: "人物",
                            items: [
                                {
                                    text: "あっきー",
                                    link: '/wiki/persons/akki'
                                }
                            ]
                        },
                        {
                            text: "事件",
                            link: "/wiki/accident",
                            items: [

                            ]
                        },
                        {
                            text: '企画',
                            link: '/wiki/servers',
                            items: [
                                {
                                    text: '2025',
                                    link: '/wiki/servers/2025',
                                    items: getSidebarItems('docs/wiki/servers/2025', '/wiki/servers/2025')
                                },
                                {
                                    text: '2024',
                                    link: '/wiki/servers/2024',
                                    items: getSidebarItems('docs/wiki/servers/2024', '/wiki/servers/2024')
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

import fs from 'fs'
import path from 'path'

export default {
    title: 'あっきーサーバー',
    description: '',
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: 'Wiki', link: '/wiki' },
        ],
        sidebar: {
            '/': [
                { text: 'ホーム', link: '/' },
                { text: 'Wiki', link: '/wiki' },
            ],
            '/wiki/': [
                { text: 'ホーム', link: '/' },
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
                            text: "イベント",
                            link: "/wiki/event",
                            items: [
                                {text: "2周年", link: "/wiki/event/2nd_aniv"}
                            ]
                        },
                        {
                            text: "事件",
                            link: "/wiki/accident",
                            items: [
                                {
                                    text: '2025',
                                    items: [
                                        {text: "サーバー接続障害", link: "/wiki/accident/server_accident"}
                                    ]
                                }
                            ]
                        },
                        {
                            text: '企画',
                            link: '/wiki/servers',
                            items: [
                                {
                                    text: '2025',
                                    link: '/wiki/servers/2025',
                                    items: [
                                        {text: '冒険鯖', link: "/wiki/servers/2025/aug_adv"},
                                        {text: '8.5月鯖', link: "/wiki/servers/2025/aug_point_five"},
                                        {text: 'ゾンビアポカリプス鯖', link: "/wiki/servers/2025/sep_apocalypse"},
                                        {text: '9月鯖番外編', link: "/wiki/servers/2025/sep_extra"}
                                    ]
                                },
                                {
                                    text: '2024',
                                    link: '/wiki/servers/2024',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

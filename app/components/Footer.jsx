import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="p-6 flex flex-col items-center  text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with me</h2>
            <div className="flex space-x-6 mt-4">
                <a target='blank' href="https://x.com/ebaadraheem19?s=09" className="text-green-400 hover:text-green-600 transition-all flex items-center space-x-2" aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.959 4.959 0 002.163-2.723 9.998 9.998 0 01-3.127 1.184 4.929 4.929 0 00-8.379 4.49A13.978 13.978 0 011.671 3.15a4.822 4.822 0 00-.665 2.475c0 1.708.87 3.213 2.188 4.096a4.902 4.902 0 01-2.23-.616v.062c0 2.385 1.693 4.374 3.946 4.829a4.935 4.935 0 01-2.224.084 4.937 4.937 0 004.604 3.419 9.876 9.876 0 01-6.102 2.105c-.39 0-.779-.022-1.17-.066a13.957 13.957 0 007.557 2.213c9.054 0 14-7.496 14-13.986 0-.21-.004-.423-.016-.635A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                </a>
                <a target='blank' href="https://www.linkedin.com/in/ebaad-raheem-4b62a8262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-green-400 hover:text-green-600 transition-all" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.775c0-1.375-.025-3.15-1.918-3.15-1.92 0-2.212 1.499-2.212 3.05v5.875H9.211V9h3.412v1.561h.048c.475-.9 1.632-1.849 3.362-1.849 3.592 0 4.253 2.366 4.253 5.45v6.29zM5.337 7.433a2.073 2.073 0 01-2.067-2.075 2.07 2.07 0 012.067-2.07c1.144 0 2.073.928 2.073 2.07 0 1.147-.93 2.075-2.073 2.075zm1.777 13.02H3.56V9h3.554v11.453zM22.225 0H1.771C.792 0 0 .776 0 1.738v20.523C0 23.222.792 24 1.771 24h20.453C23.205 24 24 23.223 24 22.261V1.738C24 .776 23.205 0 22.225 0z"></path>
                    </svg>
                </a>
                <a target='blank' href="https://github.com/ebaadraheem" className="text-green-400 hover:text-green-600 transition-all" aria-label="GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.257c-3.338.725-4.033-1.607-4.033-1.607-.547-1.387-1.336-1.756-1.336-1.756-1.09-.746.083-.73.083-.73 1.204.083 1.836 1.238 1.836 1.238 1.07 1.834 2.809 1.305 3.495.998.108-.774.42-1.305.763-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.237-3.223-.124-.305-.535-1.538.117-3.204 0 0 1.008-.322 3.303 1.23a11.507 11.507 0 013.003-.404 11.5 11.5 0 013.003.404c2.293-1.552 3.299-1.23 3.299-1.23.654 1.666.243 2.899.12 3.204.77.842 1.236 1.913 1.236 3.223 0 4.61-2.804 5.624-5.476 5.921.432.372.82 1.102.82 2.222v3.293c0 .318.192.69.799.574C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"></path>
                    </svg>
                </a>
                <a target='blank' href="https://www.facebook.com/ebaad.raheem?mibextid=ZbWKwL" className="text-green-400 hover:text-green-600 transition-all" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.41c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.326C24 .594 23.407 0 22.675 0z"></path>
                    </svg>
                </a>
                <a target='blank' href="https://www.instagram.com/ebaadraheem19?igsh=MWJxYmZiZWZ2NGs5MQ== "
                    className="text-green-400 hover:text-green-600 transition-all"
                    aria-label="Instagram" >
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 420 419.997"
                        xmlns="http://www.w3.org/2000/svg"  > <path
                            d="M388.818,146.28a24.3,24.3,0,1,1-24.295-24.295A24.3,24.3,0,0,1,388.818,146.28ZM466,256l-0.005.306-1.38,88.105a121.58,121.58,0,0,1-120.2,120.2L256,466l-0.306-.006-88.105-1.376a121.586,121.586,0,0,1-120.206-120.2L46,256l0.006-.306,1.376-88.108a121.59,121.59,0,0,1,120.206-120.2L256,46l0.306,0.006,88.105,1.376a121.584,121.584,0,0,1,120.2,120.2Zm-39.112,0-1.374-87.8A82.654,82.654,0,0,0,343.8,86.485L256,85.114l-87.8,1.371A82.658,82.658,0,0,0,86.484,168.2L85.113,256l1.371,87.8A82.655,82.655,0,0,0,168.2,425.515l87.8,1.371,87.8-1.371A82.651,82.651,0,0,0,425.514,343.8Zm-63.048,0A107.841,107.841,0,1,1,256,148.159,107.962,107.962,0,0,1,363.84,256Zm-39.107,0A68.734,68.734,0,1,0,256,324.734,68.812,68.812,0,0,0,324.732,256Z"
                            transform="translate(-46 -46.001)"
                            fill="currentColor" /></svg>
                </a>

            </div>
        </footer>
    )
}

export default Footer

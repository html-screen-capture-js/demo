

// workaround until we fix types in html-screen-capture-js
declare module 'html-screen-capture-js' {
    const capture: (type: 'string', elm: Document, options: any) => void
}
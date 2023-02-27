export type DocumentRef = string
export type ElementRef = string
export type ElementAttributes = {[key: string]: string}

export class Document {
    private ref: DocumentRef
    private constructor(ref: DocumentRef) {
        this.ref = ref
    }

    static parse(html: string): Document {
        return new this(__document_parse(html))
    }

    free() {
        __document_free(this.ref)
    }

    getElementById(id: string): Element {
        return new Element(__document_getElementById(this.ref, id))
    }

    getElementsByClassName(name: string): Element[] {
        return __document_getElementsByClassName(this.ref, name).map(ref => new Element(ref))
    }

    getElementsByTagName(name: string): Element[] {
        return __document_getElementsByTagName(this.ref, name).map(ref => new Element(ref))
    }

    querySelector(selector: string): Element {
        return new Element(__document_querySelector(this.ref, selector))
    }

    querySelectorAll(selector: string): Element[] {
        return __document_querySelectorAll(this.ref, selector).map(ref => new Element(ref))
    }

    get children(): Element[] {
        return __document_children(this.ref).map(ref => new Element(ref))
    }

    get body(): Element {
        return new Element(__document_body(this.ref))
    }

    get head(): Element {
        return new Element(__document_head(this.ref))
    }

    get root(): Element {
        return new Element(__document_root(this.ref))
    }
}

export class Element {
    private ref: ElementRef
    constructor(ref: ElementRef) {
        this.ref = ref
    }

    get attributes(): ElementAttributes {
        return __element_attributes(this.ref)
    }

    get childElementCount(): number {
        return __element_childElementCount(this.ref)
    }

    get children(): Element[] {
        return __element_children(this.ref).map(ref => new Element(ref))
    }

    get classList(): string[] {
        return __element_classList(this.ref)
    }

    get className(): string {
        return __element_className(this.ref)
    }

    get firstElementChild(): Element {
        return new Element(__element_firstElementChild(this.ref))
    }

    get lastElementChild(): Element {
        return new Element(__element_lastElementChild(this.ref))
    }

    get id(): string {
        return __element_id(this.ref)
    }

    get innerHTML(): string {
        return __element_innerHTML(this.ref)
    }

    get outerHTML(): string {
        return __element_outerHTML(this.ref)
    }

    get previousElementSibling(): Element | null {
        const ref = __element_previousElementSibling(this.ref)
        return ref === null ? null : new Element(ref)
    }

    get nextElementSibling(): Element | null {
        const ref = __element_nextElementSibling(this.ref)
        return ref === null ? null : new Element(ref)
    }

    get tagName(): string {
        return __element_tagName(this.ref)
    }

    getAttribute(name: string): string {
        return __element_getAttribute(this.ref, name)
    }

    getAttributeNames(): string[] {
        return __element_getAttributeNames(this.ref)
    }

    getElementById(id: string): Element {
        return new Element(__element_getElementById(this.ref, id))
    }

    getElementsByClassName(name: string): Element[] {
        return __element_getElementsByClassName(this.ref, name).map(ref => new Element(ref))
    }

    getElementsByTagName(name: string): Element[] {
        return __element_getElementsByTagName(this.ref, name).map(ref => new Element(ref))
    }

    querySelector(selector: string): Element {
        return new Element(__element_querySelector(this.ref, selector))
    }

    querySelectorAll(selector: string): Element[] {
        return __element_querySelectorAll(this.ref, selector).map(ref => new Element(ref))
    }

    hasAttribute(name: string): boolean {
        return __element_hasAttribute(this.ref, name)
    }

    hasAttributes(): boolean {
        return __element_hasAttributes(this.ref)
    }

    matches(selector: string): boolean {
        return __element_matches(this.ref, selector)
    }

    get innerText(): string {
        return __element_innerText(this.ref)
    }

    get outerText(): string {
        return __element_outerText(this.ref)
    }

    get style(): string {
        return __element_style(this.ref)
    }

    get title(): string {
        return __element_title(this.ref)
    }
}

declare global {
    const __document_parse: (html: string) => DocumentRef
    const __document_free: (ref: DocumentRef) => void

    const __document_getElementById: (ref: DocumentRef, id: string) => ElementRef
    const __document_getElementsByClassName: (ref: DocumentRef, name: string) => ElementRef[]
    const __document_getElementsByTagName: (ref: DocumentRef, name: string) => ElementRef[]
    const __document_querySelector: (ref: DocumentRef, selector: string) => ElementRef
    const __document_querySelectorAll: (ref: DocumentRef, selector: string) => ElementRef[]
    const __document_children: (ref: DocumentRef) => ElementRef[]
    const __document_body: (ref: DocumentRef) => ElementRef
    const __document_head: (ref: DocumentRef) => ElementRef
    const __document_root: (ref: DocumentRef) => ElementRef

    const __element_attributes: (ref: ElementRef) => ElementAttributes
    const __element_childElementCount: (ref: ElementRef) => number
    const __element_children: (ref: ElementRef) => ElementRef[]
    const __element_classList: (ref: ElementRef) => string[]
    const __element_className: (ref: ElementRef) => string
    const __element_firstElementChild: (ref: ElementRef) => ElementRef
    const __element_lastElementChild: (ref: ElementRef) => ElementRef
    const __element_id: (ref: ElementRef) => string
    const __element_innerHTML: (ref: ElementRef) => string
    const __element_outerHTML: (ref: ElementRef) => string
    const __element_previousElementSibling: (ref: ElementRef) => ElementRef | null
    const __element_nextElementSibling: (ref: ElementRef) => ElementRef | null
    const __element_tagName: (ref: ElementRef) => string
    const __element_getAttribute: (ref: ElementRef, name: string) => string
    const __element_getAttributeNames: (ref: ElementRef) => string[]
    const __element_getElementById: (ref: ElementRef, id: string) => ElementRef
    const __element_getElementsByClassName: (ref: ElementRef, name: string) => ElementRef[]
    const __element_getElementsByTagName: (ref: ElementRef, name: string) => ElementRef[]
    const __element_querySelector: (ref: ElementRef, selector: string) => ElementRef
    const __element_querySelectorAll: (ref: ElementRef, selector: string) => ElementRef[]
    const __element_hasAttribute: (ref: ElementRef, name: string) => boolean
    const __element_hasAttributes: (ref: ElementRef) => boolean
    const __element_matches: (ref: ElementRef, selector: string) => boolean
    const __element_innerText: (ref: ElementRef) => string
    const __element_outerText: (ref: ElementRef) => string
    const __element_style: (ref: ElementRef) => string
    const __element_title: (ref: ElementRef) => string
}
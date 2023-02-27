"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = exports.Document = void 0;
class Document {
    constructor(ref) {
        this.ref = ref;
    }
    static parse(html) {
        return new this(__document_parse(html));
    }
    free() {
        __document_free(this.ref);
    }
    getElementById(id) {
        return new Element(__document_getElementById(this.ref, id));
    }
    getElementsByClassName(name) {
        return __document_getElementsByClassName(this.ref, name).map(ref => new Element(ref));
    }
    getElementsByTagName(name) {
        return __document_getElementsByTagName(this.ref, name).map(ref => new Element(ref));
    }
    querySelector(selector) {
        return new Element(__document_querySelector(this.ref, selector));
    }
    querySelectorAll(selector) {
        return __document_querySelectorAll(this.ref, selector).map(ref => new Element(ref));
    }
    get children() {
        return __document_children(this.ref).map(ref => new Element(ref));
    }
    get body() {
        return new Element(__document_body(this.ref));
    }
    get head() {
        return new Element(__document_head(this.ref));
    }
    get root() {
        return new Element(__document_root(this.ref));
    }
}
exports.Document = Document;
class Element {
    constructor(ref) {
        this.ref = ref;
    }
    get attributes() {
        return __element_attributes(this.ref);
    }
    get childElementCount() {
        return __element_childElementCount(this.ref);
    }
    get children() {
        return __element_children(this.ref).map(ref => new Element(ref));
    }
    get classList() {
        return __element_classList(this.ref);
    }
    get className() {
        return __element_className(this.ref);
    }
    get firstElementChild() {
        return new Element(__element_firstElementChild(this.ref));
    }
    get lastElementChild() {
        return new Element(__element_lastElementChild(this.ref));
    }
    get id() {
        return __element_id(this.ref);
    }
    get innerHTML() {
        return __element_innerHTML(this.ref);
    }
    get outerHTML() {
        return __element_outerHTML(this.ref);
    }
    get previousElementSibling() {
        const ref = __element_previousElementSibling(this.ref);
        return ref === null ? null : new Element(ref);
    }
    get nextElementSibling() {
        const ref = __element_nextElementSibling(this.ref);
        return ref === null ? null : new Element(ref);
    }
    get tagName() {
        return __element_tagName(this.ref);
    }
    getAttribute(name) {
        return __element_getAttribute(this.ref, name);
    }
    getAttributeNames() {
        return __element_getAttributeNames(this.ref);
    }
    getElementById(id) {
        return new Element(__element_getElementById(this.ref, id));
    }
    getElementsByClassName(name) {
        return __element_getElementsByClassName(this.ref, name).map(ref => new Element(ref));
    }
    getElementsByTagName(name) {
        return __element_getElementsByTagName(this.ref, name).map(ref => new Element(ref));
    }
    querySelector(selector) {
        return new Element(__element_querySelector(this.ref, selector));
    }
    querySelectorAll(selector) {
        return __element_querySelectorAll(this.ref, selector).map(ref => new Element(ref));
    }
    hasAttribute(name) {
        return __element_hasAttribute(this.ref, name);
    }
    hasAttributes() {
        return __element_hasAttributes(this.ref);
    }
    matches(selector) {
        return __element_matches(this.ref, selector);
    }
    get innerText() {
        return __element_innerText(this.ref);
    }
    get outerText() {
        return __element_outerText(this.ref);
    }
    get style() {
        return __element_style(this.ref);
    }
    get title() {
        return __element_title(this.ref);
    }
}
exports.Element = Element;

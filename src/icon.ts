interface JsonIcon {
    name: string
    content: string
    tags: string[]
}

export class Icon {
    name: string;
    contents: string;
    tags: string[];

    constructor({ name, content, tags }: JsonIcon) {
        this.name = name;
        this.contents = content;
        this.tags = tags;
    }

    toSvg() {
        return this.contents;
    }
}
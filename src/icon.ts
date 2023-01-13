interface JsonIcon {
    name: string
    content: string
}

export class Icon {
    name: string;
    contents: string;
    tags: string[];

    constructor({ name, content }: JsonIcon) {
        console.log(name)
        this.name = name;
        this.contents = content;
        this.tags = [];
    }

    toSvg() {
        return this.contents;
    }
}
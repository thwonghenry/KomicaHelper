declare namespace komicaExtractor {
    interface Data {
        threads?: Thread[];
    }
    interface Thread {
        url?: string;
        replies?: Reply[];
    }
    interface Reply {
        image?: Image;
        topic?: string;
        date?: Date;
        posterName?: string;
        posterID?: string;
        replyID?: string;
        content?: HTMLElement;
        nodes?: Node[];
    }
    interface Image {
        thumnnail?: string;
        src?: string;
        filename?: string;
    }
    interface Extractor {
        extractReplyList(doc: HTMLDocument): komicaExtractor.Thread;
        extractThreadList(doc: HTMLDocument): komicaExtractor.Data;
    }
    interface ExtractorClass {
        new (url: string): komicaExtractor.Extractor;
    }
    interface Index {
        match: RegExp;
        extractor: komicaExtractor.ExtractorClass;
    }
}

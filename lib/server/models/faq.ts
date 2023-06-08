export interface IFaq {
    faqId: number;
    question: string;
    answer: string;
}

export interface IFaqService {
    getFaqList(): IFaq[];
}
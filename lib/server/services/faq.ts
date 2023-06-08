
import { IFaq, IFaqService } from '@/lib/server/models/faq';
import { faqData } from '@/lib/server/data/faq';
import {IGlobalInstance, initializeService} from "@/lib/server/utils/initializeService";

class FaqService implements IFaqService {
    constructor(private faq: IFaq[]) {}

    getFaqList() {
        return this.faq;
    }
}

let globalFaq = global as unknown as IGlobalInstance<FaqService>

const faq = initializeService(FaqService, faqData, globalFaq, 'faq');


export default faq;
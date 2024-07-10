import { Vue } from 'vue-class-component';

import { AxiosFrontAPI } from "@/axios";

const api = "/usuario";

export default class UsarioService extends Vue {
    static async incluir(req: any): Promise<any> {
        const res = await AxiosFrontAPI.post(
            `${api}/cadastrar`, req)
        return res.data;
    } 
}
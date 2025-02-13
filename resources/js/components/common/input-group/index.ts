export { default as CheckboxInput } from "./CheckboxInput.vue";
export { default as TextAreaInput } from "./TextAreaInput.vue";
export { default as TextInput } from "./TextInput.vue";

export type InputMaskType = 'phone' | 'cnpj' | 'cpf' | 'cpfCnpj' | 'cep' | 'credit_card' | 'credit_card_due_date' | 'credit_card_cvv' | string;
export const inputMasks = {
    phone: { mask: ["(##) ####-####", "(##) #####-####"] },
    cnpj: { mask: "##.###.###/####-##" },
    cpf: { mask: "###.###.###-##" },
    cpfCnpj: { mask: ["###.###.###-##", "##.###.###/####-##"] },
    cep: { mask: "#####-###" },
    credit_card: { mask: "#### #### #### ####" },
    credit_card_due_date: { mask: "##/####" },
    credit_card_cvv: { mask: "####" }
};

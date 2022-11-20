import HomeView from "./home/Home";
import SignInView from "./signin/SignIn";
import PainelView from "./painel/Painel";

import FuncionarioView from "./funcionario/Funcionario";
import FormFuncionarioView from "./funcionario/form-funcionario/FormFuncionario";

import AgendamentoView from "./agendamento/Agendamento";
import FormAgendamentoView from "./agendamento/form-agendamento/FormAgendamento";

import TutorView from "./tutor/Tutor";
import TutorFormView from "./tutor/form-tutor/FormTutor";

import AnimalView from "./animal/Animal";
import AnimalFormView from "./animal/form-animal/FormAnimal";

import ProntuarioView from "./prontuario/Prontuario";
import FormProntuarioView from "./prontuario/form-prontuario/FormProntuario";

namespace Views {
    export const Home = HomeView;
    export const SignIn = SignInView;
    export const Painel = PainelView;

    export type Home = HomeView;
    export type SignIn = SignInView;
    export type Painel = PainelView;

    export namespace Funcionario {
        export const Page = FuncionarioView;
        export const Form = FormFuncionarioView;

        export type Page = FuncionarioView;
        export type Form = FormFuncionarioView;
    }

    export namespace Agendamento {
        export const Page = AgendamentoView;
        export const Form = FormAgendamentoView;

        export type Page = AgendamentoView;
        export type Form = FormAgendamentoView;
    }

    export namespace Tutor {
        export const Page = TutorView;
        export const Form = TutorFormView;

        export type Page = TutorView;
        export type Form = TutorFormView;
    }

    export namespace Animal {
        export const Page = AnimalView;
        export const Form = AnimalFormView;

        export type Page = AnimalView;
        export type Form = AnimalFormView;
    }

    export namespace Prontuario {
        export const Page = ProntuarioView;
        export const Form = FormProntuarioView;

        export type Page = ProntuarioView;
        export type Form = FormProntuarioView;
    }
}

export default Views;
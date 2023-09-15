import React from "react";
import Image from "next/image";
// import chikita from "@/public/chikita.gif"


export default function Sponsors() {
    return (
        <div className="flex flex-col flex-wrap min-h-screen w-screen p-6 items-center justify-center text-slate-800 text-lg">

            <p className="text-4xl pb-8">Nasi niesamowici sponsorzy</p>
            <br/>
            Na naszej stronie z dumą prezentujemy naszych niezwykłych sponsorów, którzy przyczyniają się do rozwoju naszego projektu.
            Oto kilka z nich:
            <br/>

            <div>
                <p className="text-lg underline underline-offset-4">Przędzalnia Płetw</p> - ekspert w dziedzinie wytwarzania nićmi pokrytych płetw dla ryb. Dzięki nim ryby czują się bardziej stylowo i wyjątkowo, a jednocześnie nie tracą swojej naturalnej elegancji.
                <br/><br/>
                <p className="text-lg underline underline-offset-4">Firma "Bąbelkowa Magia"</p> - twórcy innowacyjnych generatorów bąbelków do akwariów. Jeżeli twoje ryby są zmęczone tradycyjnymi bąbelkami, ta firma dostarczy Ci najnowsze rozwiązania, aby zaspokoić ich apetyt na bąbelkową zabawę.
                <br/><br/>
                <p className="text-lg underline underline-offset-4">Sklep "Rybki w Garnku"</p> - unikalne miejsce, w którym rybki sprzedawane są razem z gotowym garnkiem. To idealne rozwiązanie dla tych, którzy chcą mieć akwarium i gotowy obiad w jednym. Oszczędzasz czas i jednocześnie zyskujesz towarzystwo podczas jedzenia.
                <br/><br/>
                <p className="text-lg underline underline-offset-4">Firma "Algi na Pokaz"</p> - producent najbardziej modne i stylowe algi do dekoracji akwariów. Te algi są tak atrakcyjne, że ryby chętnie pozują obok nich na zdjęcia i korzystają z nich jako tła do swojego Instagrama.
                <br/><br/>
                <p className="text-lg underline underline-offset-4">Szkółka "Pływające Drzewa"</p> - specjalizuje się w hodowli wyjątkowych drzew wodnych, które płyną na powierzchni akwarium. Dzięki nim twoje ryby będą miały cień i schronienie w każdym miejscu, a jednocześnie zaskoczysz wszystkich swoją ogrodową awangardą.
                <br/><br/>
                <p className="text-lg underline underline-offset-4">Firma "Rybi Raj"</p> - eksperci od projektowania i budowy egzotycznych rezydencji dla ryb. Ich akwaria są tak luksusowe, że ryby wkrótce zaczną organizować przyjęcia i zobowiązują się do zaproszenia Cię na jeden z nich.
                <br/><br/>
                <strong>Oto tylko kilka z naszych fantastycznych sponsorów, którzy wspierają naszą stronę i nasze wirtualne akwaria. Dziękujemy im za ich kreatywność i innowacyjność w działaniu. Wspólnie tworzymy niepowtarzalne doświadczenie akwarystyczne dla wszystkich naszych użytkowników!</strong>
            </div>
            
        </div>
    )
}
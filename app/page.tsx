import Image from 'next/image'
import AIRybka from '@/public/Hotpot.png'

export default function Home() {
    return (
        <div className="flex justify-center align-center h-screen">
            <div className="relative top-1/2 translate-y-[-50%] flex flex-col justify-center bg-blue-400
            basis-1/2 min-h-[500px] max-h-[600px] mx-5 rounded-[40px] p-[50px] overflow-hidden">
                <div className="absolute bottom-0 left-0">
                    <Image src={AIRybka} alt="AI Rybka" width={1000} />
                </div>
            </div>
            <div className="flex flex-col justify-center text-center px-5 basis-1/2 text-2xl my-auto text-black">
                <div className="mb-2 text-4xl">Ciekawostka dnia</div>
                <hr className="border-solid border-b-2 mx-auto mb-4 min-w-[300px] border-black"/>
                <div className="flex justify-center text-center text-2xl my-auto">
                    Akwarystyka słodkowodna to popularne hobby, przy którym bawi się coraz więcej Polaków.
                    Szacuje się, że już starożytni Chińczycy zajmowali się hodowlą słodkowodną w glinianych
                    naczyniach. Z biegiem czasu dyscyplina rozwijała się, przyjmując najrozmaitsze trendy.
                    Akwarystyka słodkowodna to nie tylko ryby oraz woda. To również spędzone godziny,
                    które musi poświęcić hobbysta, aby nie tylko skompletować wszelkie elementy potrzebne
                    do budowy podwodnego świata, ale także odpowiednio nim zarządzać.
                </div>
            </div>
        </div>
    );
}

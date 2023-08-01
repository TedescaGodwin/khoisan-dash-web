
import Image from 'next/image'
const KhoiSanLogo = ({label}) => {
    label = label === "" ? "Sign in to" : label ;
    return(
    <>
        
        <div className="text-center mb-3 ">
            <Image src="/img/logo.png" alt="Khoi Dash Logo" width={160} height={120} priority={true}/>
            <div className='flex text-3xl font-light tracking-wide items-center'>
                <div className="ml-3">{label}&nbsp;</div>
                    <div className='text-green-900'>
                        KhoiSan
                    </div>
                <div className='text-orange-500'>Dash</div>
            </div>
        </div>
    </>
    );
}

export default KhoiSanLogo;
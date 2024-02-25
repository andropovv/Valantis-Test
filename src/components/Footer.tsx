import HhLogo from '../assets/HhLogo.png';
import TgLogo from '../assets/TgLogo.svg';
import GithubLogo from '../assets/GithubLogo.svg';

const Footer = () => {
    return (
        <div className='h-20 flex-auto-0 bg-gray-400 flex justify-center flex-col items-center gap-1 text-xs'>
            <div className='flex gap-2 items-center'>
                <a href='https://t.me/Andre7w7' target='_blank' rel='noreferrer'>
                    <img src={TgLogo} alt='telegram' className='h-7 w-7' />
                </a>
                <a
                    href='https://stavropol.hh.ru/resume/be875028ff0bd18b620039ed1f356c6e6e3545?hhtmFrom=account_login'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={HhLogo} alt='hh.ru' className='h-6 w-6' />
                </a>
                <a href='https://github.com/andropovv' target='_blank' rel='noreferrer'>
                    <img src={GithubLogo} alt='github' className='h-6 w-6' />
                </a>
            </div>
            <div className='text-white italic'>Developed by Andrey Kuznetsov</div>
        </div>
    );
};

export default Footer;

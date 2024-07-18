import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed w-full h-[112px] bg-[#131313] flex flex-col justify-center items-center">
      <div className="w-full h-[70px] flex justify-center">
        <div className="w-[80%] h-full flex justify-between items-center text-[#ED820E]">
          <Link to='/'>
            <span
              className="text-[50px] font-bold cursor-pointer"
              style={{ fontFamily: 'Teko' }}>
              BALAPASHKA SHOP
            </span>
          </Link>
          <div
            className="flex items-center"
            style={{ fontFamily: 'Teko' }}>
            <p className="text-[30px] font-semibold me-2">+7 (705) 131-59-66</p>
            <span className="w-[46px] h-[46px]">
              <a href="https://www.instagram.com/balapashka.shop/" target="_blank">
                <img className="w-full h-full object-cover" src="/img/instagram-logo.png" alt="instagram-logo" />
              </a>
            </span>
            <span className="w-[53px] h-[53px] mt-[-2px]">
              <a href="https://api.whatsapp.com/message/JXNH2Z6NKNVJO1?autoload=1&app_absent=0" target="_blank">
                <img className="w-full h-full object-cover" src="/img/whatsapp-logo.png" alt="whatsapp-logo" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[32px] bg-[#ED820E] flex justify-center">
        <Link to='/catalog'>
          <span className="px-[150px] h-full hover:bg-[#e99944] duration-200 cursor-pointer flex items-center text-[32px] font-light">
            КАТАЛОГ
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

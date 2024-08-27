import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { AiOutlineQrcode, AiTwotoneContainer, AiOutlineKey, AiOutlineUser } from 'react-icons/ai';
import WalletResetPasswordModal from "../component/WalletResetPasswordModal";
import { useTranslation } from 'react-i18next';
import { SERVER_URL } from '../../constants/env';
import axios from 'axios';
function WalletUserName() {
  const [t, i18n] = useTranslation();
  const [use, setUser] = useState(JSON.parse(localStorage.getItem("userInfo")));
  const [showModal, setShowModal] = useState(false);

 
  return (
    <Col span={22} offset={1} className="mt-8 myColor1 text-sm">
      <Row>
        <Col span={20}>
          {t('User Name')}
        </Col>
       
      </Row>

      <Row className="text-lg font-bold">
        <Col span={20}>
          {t(use.user_name)}
        </Col>
       
      </Row>


      {
        showModal ?
          <WalletResetPasswordModal setModalShow={setShowModal} title="Reset Password" />
          : null
      }
    </Col>
  );
}

export default WalletUserName;
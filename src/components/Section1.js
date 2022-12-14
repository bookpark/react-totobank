import { Button } from 'reactstrap';

function Section1() {
    return (
        <tr>
            <td className={'w-50'}>
                <div className='imgBox'>
                    <img src={require('../img/main-withdrawal.png')} height='750px' width='550px' alt='main-withdrawal' />
                </div>
            </td>
            <td className={'w-50'}>
                <div className='textBox'>
                    <span className='l-text'>
                        모바일로 더 손쉬운<br />
                        계좌개설, 간편한 이체<br />
                    </span><br />
                    <span className='s-text'>
                        인증서, OTP 없이 계좌 개설이 간편합니다.<br />
                        여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
                    </span><br />
                    <Button color='light' size='sm'>카카오뱅크 입출금통장&gt;</Button>
                </div>
            </td>
        </tr>
    )
}

export default Section1;
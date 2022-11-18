import {Button} from 'reactstrap';

function Section2() {
    return (
        <tr>
            {/* 부트스트랩 클래스명 처럼 상수값은 중괄호를 써도 되고 안써도 됨.
            하지만 내가 만든 것과 만들어진 거의 차이를 보기 위해 일부러 씀. */}
            <td className={'w-70'}>
                <div className="textBox" style={{ paddingLeft: '130px' }}>
                    <span className="l-text">
                        우대조건 없이<br />
                        합리적인 예금과 적금<br />
                    </span>
                    <span className="s-text">
                        기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있나요?<br />
                        토토뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고 합리적입니다.
                    </span><br />
                    <Button color='light' size='sm'>정기예금&gt;</Button>&nbsp;&nbsp;
                    <Button color='light' size='sm'>자유적금&gt;</Button><br /><br />
                    <img src={require('../img/main-savings-money.png')} height='124px' width='522px' alt='' />
                </div>
            </td>
            <td className={'w-30'}>
                <div className='imgBox'>
                    <img src={require('../img/main-savings.png')} height='850px' width='550px' alt='' />
                </div>
            </td>
        </tr>
    )
}

export default Section2;
import { Button } from 'reactstrap';

function Section4() {
    return (
        <tr>
            <td className={'w-50'}>
                <div className='textBox' style={{ paddingLeft: '130px' }}>
                    <span className='l-text'>
                        함께 도전해서<br />
                        재미있는 26주 적금
                    </span><br />
                    <span className="s-text">
                        26주 동안 변화하는 재미에 빠져있는 사이<br />
                        어느덧 만기 달성 경험을 맛보게 됩니다.
                    </span><br />
                    <Button color='light' size='sm'>26주 적금&gt;</Button><br />
                </div>
            </td>
            <td className={'w-50'}>
                <div className='imgBox'>
                    <img src={require('../img/main-26weeks.png')} height='408px' width='520px' alt='' />
                </div>
            </td>
        </tr>
    )
}

export default Section4;
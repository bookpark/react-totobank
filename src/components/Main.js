import { Component } from 'react';
import { Table } from 'reactstrap';
import Section0 from './Section0';
import Section1 from './Section1';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Table borderless size='sm'>
                    <tbody>
                        <Section0 />
                        <Section1 />
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Main;
import './index.scss'


export default function Card(props) {

    return (
        <div className='card-container'>
            <div className='card'>
                <div
                    className='line'
                    style={{ backgroundColor: props.cor }}
                />
                <div>
                    <h3>{props.periodo}</h3>
                    <h2>{props.titulo}</h2>
                </div>
            </div>
        </div>
    )
}
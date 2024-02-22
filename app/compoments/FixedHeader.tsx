import { Divider } from 'antd'

const FixedHeader: React.FC = () => (
    <header className="flex-1 ">
        <div style={{
            // paddingTop: '70px',
            height: '70px'
        }}>
            <div
                style={{
                    padding: '1rem 1rem 0',
                    //  background: "red",
                    position: 'fixed',
                    top: 0,
                    width: "100%",
                    background: '#fff',
                    zIndex: 99
                }}
            >
                <h2>Nearby Food Truck</h2>
                <Divider plain style={{ marginBottom: 0, marginTop: '1rem' }}></Divider>
            </div>
             
        </div>

    </header>
)



export default FixedHeader
import './App.css'
import reactLogo from './assets/react.svg'

function App() {
    const getNotification = () => {
        const title = "Notification title";
        const body = "Notification body"
        const icon = reactLogo;
        if (!("Notification" in window)) {
            alert("Tarayıcın desteklemiyor");
        } else if (Notification.permission === 'denied') {
            alert('Bildirime izin vermemişsin')
        } else if (Notification.permission === 'granted') {
            alertNotification(title, body, icon);
        } else if (Notification.permission === 'default') {
            Notification.requestPermission().then((permisson) => {
                // izin alır, verilen izni döndürür
                if (permisson === 'granted') {
                    alertNotification(title, body, icon);
                }
            })
        }
    }
    const alertNotification = (title, body, icon) => {
        const notification = new Notification(title, {body, icon});
        notification.onclick = () => {
            // bildirime tıklanınca yapılacaklar
            console.log('Serhat')
            notification.close(); // bildirimi kapatır
            window.parent.focus(); // tarayıcıya odaklanır
        }
    }

    return (  // npm run dev
        <div className="App">
            <div className="card">
                <button onClick={getNotification}>
                    Anlık Bildirim
                </button>
                <button onClick={() => setTimeout(() => getNotification(), 1000)}>
                    1 saniye sonra bildirim
                </button>
            </div>
        </div>
    )
}

export default App

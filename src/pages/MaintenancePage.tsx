import { Hammer } from 'lucide-react';

export default function MaintenancePage() {
    return (
        <div className="maintenance-container">
            <div className="maintenance-content">
                <div className="icon-wrapper">
                    <Hammer size={64} color="var(--accent)" />
                </div>
                <h1>System Maintenance</h1>
                <p>
                    Habitat Living Solutions LLC is currently undergoing scheduled maintenance to improve our services.
                    <br />
                    We will be back shortly.
                </p>
                <div className="maintenance-footer">
                    &copy; {new Date().getFullYear()} Habitat Living Solutions LLC
                </div>
            </div>
            <style>{`
                .maintenance-container {
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--primary);
                    color: white;
                    text-align: center;
                    padding: 20px;
                }

                .maintenance-content {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 60px 40px;
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    max-width: 600px;
                    width: 100%;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }

                .icon-wrapper {
                    background: rgba(255, 255, 255, 0.1);
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 32px;
                }

                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 24px;
                    font-weight: 700;
                    letter-spacing: -0.025em;
                }

                p {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.6;
                    margin-bottom: 40px;
                }

                .maintenance-footer {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </div>
    );
}

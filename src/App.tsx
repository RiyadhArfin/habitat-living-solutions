import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import MaintenancePage from './pages/MaintenancePage';

function App() {
    const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

    if (isMaintenance) {
        return <MaintenancePage />;
    }

    return <RouterProvider router={router} />;
}

export default App;

// import { Outlet } from 'react-router-dom';
// import Navigation from './Navigation';
// import Footer from './Footer';

// export default function Layout() {
//     return (
//         <main className="flex min-h-screen flex-col pt-18">
//             <Navigation />

//             {/* page content sections will use the centered section class below */}
//             <Outlet />

//             <Footer />
//         </main>
//     );
// }

import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
    return (
        <div >
            <div className="flex min-h-screen flex-col">
                <Navigation />

                <main className="flex-1">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}
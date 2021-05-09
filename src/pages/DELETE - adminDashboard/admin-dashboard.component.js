import React from 'react';
import './admin-dashboard.styles.scss'
import AdminNavbarComponent from "../../components/admin/admin-navbar/admin-navbar.component";
import AdminOrdersComponent from "../../components/admin/admin-orders/admin-orders.component";
import AdminClientsComponent from "../../components/admin/admin-clients/admin-clients.component";
import AdminCouponsComponent from "../../components/admin/admin-coupons/admin-coupons.component";
import AdminWaitingListComponent from "../../components/admin/admin-waitingList/admin-waitingList.component";
import AdminSummaryCardComponent from "../../components/admin/admin-summaryCard/admin-summaryCard.component";
import AdminChartsComponent from "../../components/admin/admin-charts/admin-charts.component";


function AdminDashboardComponent(props) {
    return (
        <div>
            <div className="filter-buttons">
                <button className='today'>today</button>
                <button className='yersterday'>yesterday</button>
                <button className='week'>week</button>
                <button className='month'>month</button>
            </div>
            <AdminChartsComponent/>
            <div className='summary'>
                <AdminSummaryCardComponent
                    title='NEW ORDERS'
                    number='32123'
                    increase='20%'
                    days='5 days'
                    colorSection='admin-summaryCard orders'
                />
                <AdminSummaryCardComponent
                    title='TOTAL INCOME'
                    number='$14,966'
                    increase='10%'
                    days='5 days'
                    colorSection='admin-summaryCard income'
                />
                <AdminSummaryCardComponent
                    title='NEW LEADS'
                    number='2345'
                    increase='80%'
                    days='5 days'
                    colorSection='admin-summaryCard leads'
                />
                <AdminSummaryCardComponent
                    title='TOTAL VISITORS'
                    number='347'
                    increase='10%'
                    days='5 days'
                    colorSection='admin-summaryCard visitors'
                />
            </div>
            <div className='admin-dashboard'>
                <AdminNavbarComponent/>
                <AdminOrdersComponent/>
            </div>
            <AdminClientsComponent/>
            <AdminCouponsComponent/>
            <AdminWaitingListComponent/>
        </div>

    );
}

export default AdminDashboardComponent;

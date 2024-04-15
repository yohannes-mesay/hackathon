import React from "react";
import "./Dashboard.css";
import Header from "../components/Dashboard/Header";
import Upcoming from "../components/Dashboard/Upcoming";
import PendingOrders from "../components/Dashboard/PendingOrders";
import TopServices from "../components/Dashboard/TopServices";
import RecentActivity from "../components/Dashboard/RecentActivity";
import OrderStatus from '../components/Dashboard/OrderStatus';
import LoginTab from "../components/LoginTab";
import LatestPosts from "../components/Dashboard/LatestPosts";
import NewOrders from "../components/Dashboard/NewOrders";

const Dashboard = () => {
  return (
    <div className="wrapper h-screen flex">
      <div className="w-2/3 middleDiv ">
        <Header />
        <div className="grid grid-cols-2 gap-7 mt-10">
          <Upcoming />
          <PendingOrders />
          <TopServices />
          <RecentActivity />
        </div>
        <p className="absolute bottom-2 ml-40 text-gray-500 pl-40">copyright@DevCrew. All rights are reserved</p>
      </div>
      <div className="flex-1 pl-8 pr-8 rightDiv">
        <LoginTab/>
        <p className="buyersDash pt-20 mb-10"> Manage your sells</p>
        <LatestPosts/>
        <NewOrders/>
        <OrderStatus />
      </div>
    </div>
  );
};

export default Dashboard;

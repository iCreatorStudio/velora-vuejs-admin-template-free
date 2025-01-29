<script setup lang="ts">
import DashboardChart from './DashboardChart.vue'
import DashboardChartBar from './DashboardChartBar.vue'
import LeadingTeamsCard from './LeadingTeamsCard.vue'
import LocationsCard from './LocationsCard.vue'
import MarketShareCard from './MarketShareCard.vue'
import NewCustomersCard from './NewCustomersCard.vue'
import PayingCustomersCard from './PayingCustomersCard.vue'
import PopularSellersCard from './PopularSellersCard.vue'
import SocialMediaCard from './SocialMediaCard.vue'
import TasksCard from './TasksCard.vue'
import TopCouponsCard from './TopCouponsCard.vue'
import TotalOrdersCard from './TotalOrdersCard.vue'
import TotalOrderTrendCard from './TotalOrderTrendCard.vue'
import WeatherCard from './WeatherCard.vue'
import WeeklySalesCard from './WeeklySalesCard.vue'

const salesData = [65, 70, 68, 72, 75, 71, 69, 75]

const revenueData = [4100, 4200, 4300, 4200, 4400, 4300, 4200, 4300]

const clientsData = [6700, 6750, 6780, 6760, 6790, 6770, 6780, 6782]

const usersData = [2800, 2152, 2900, 2500, 2920, 2950, 2000]
</script>

<template>
  <VRow>
    <VCol
      lg="3"
      sm="6"
      cols="12"
    >
      <DashboardChart
        title="SALES"
        value="75%"
        :percentage="7"
        time-range="Last 7 days"
        :chart-data="salesData"
        subtitle="Conversion rate"
        footer-icon="bx-dollar"
        footer-main-text="132 Sales"
        footer-sub-text="12 waiting payments"
      />
    </VCol>

    <VCol
      lg="3"
      sm="6"
      cols="12"
    >
      <DashboardChart
        title="REVENUE"
        value="$4,300"
        :percentage="8"
        time-range="Last 7 days"
        :chart-data="revenueData"
        footer-icon="bx-cart"
        footer-main-text="78 Orders"
        footer-sub-text="32 shipped"
      />
    </VCol>

    <VCol
      lg="3"
      sm="6"
      cols="12"
    >
      <DashboardChart
        title="NEW CLIENTS"
        value="6,782"
        :percentage="0"
        time-range="Last 7 days"
        :chart-data="clientsData"
        footer-icon="mdi-twitter"
        footer-main-text="623 Shares"
        footer-sub-text="16 today"
      />
    </VCol>

    <VCol
      lg="3"
      sm="6"
      cols="12"
    >
      <DashboardChartBar
        title="ACTIVE USERS"
        value="2,936"
        :percentage="4"
        time-range="Last 7 days"
        :chart-data="usersData"
        footer-icon="bx-like"
        footer-main-text="132 Likes"
        footer-sub-text="21 today"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <TopCouponsCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <MarketShareCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <PayingCustomersCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <TotalOrdersCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <TotalOrderTrendCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <SocialMediaCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <NewCustomersCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <WeeklySalesCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <WeatherCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <TasksCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <LeadingTeamsCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <PopularSellersCard />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <LocationsCard />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@styles/libs/apex-chart";
</style>

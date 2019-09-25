<template>
    <div id="header">
			<div class="nav-global">
				<div class="container">
					<h1 class="nav-logo">
						<a href="javascript:;" title="香蕉商城"><img src="../assets/img/banana-logo.png" alt=""></a>
					</h1>
					<ul class="nav-aside">
						<li class="nav-user">
							<a href="javascript:;">个人中心</a>
							<!--active-->
							<div class="nav-user-wrapper">
								<div class="nav-user-list">
									<dl class="nav-user-avatar">
										<dd><span class="ng-scope"></span></dd>
										<dt class="ng-binding">+86 138****9453</dt>
									</dl>
									<ul>
										<router-link tag='li'  class="order" to='/account'><a href="javascript:;">我的订单</a></router-link>
										<li class="coupon"><a href="javascript:;">我的优惠券</a></li>
										<li class="information"><a href="javascript:;">账户资料</a></li>
										<li class="address"><a href="javascript:;">收货地址</a></li>
										<li class="logout"><a href="javascript:;">退出</a></li>
									</ul>
								</div>
							</div>
						</li>
						<!--active-->
						<carPanel></carPanel>
					</ul>
					<ul class="nav-list">
						<li><a href="javascript:;">网站导航</a></li>
						<li><a href="javascript:;">商家入驻</a></li>
						<li><a href="javascript:;">客户服务</a></li>
					</ul>
				</div>
			</div>
			<div class="nav-sub" :class="{active:isActive}">
				<div class="nav-sub-wrapper">
					<div class="container">
						<ul class="nav-list">
							<li><router-link to='/Home'>首页</router-link></li>
							<li  v-on:mouseover='add' v-on:mouseout='del'><router-link to='' >美食</router-link></li>
							<li><router-link to='/PageOne'>电影/演出</router-link></li>
							<li class="active"><router-link to='/Shop'>外卖</router-link></li>
							<li><router-link to='/PageTwo'>酒店住宿</router-link></li>
							<li><router-link to='/PageThree'>休闲娱乐</router-link></li>
						</ul>
					</div>
				</div>

			</div>
	</div>
</template>
<script>

</script>
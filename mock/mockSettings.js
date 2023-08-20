const navbarTitle = '设置';
const backIcon = 'chevron-left';

const generalSettingTitle = '通用设置';
const generalSettingIcon = 'app';

const notificationSettingTitle = '通知设置';
const notificationSettingIcon = 'notification';

const darkModeTitle = '深色模式';
const darkModeIcon = 'image';

const fontSizeTitle = '字体大小';
const fontSizeIcon = 'chart';

const playSettingTitle = '播放设置';
const playSettingIcon = 'sound';

const accountSecurityTitle = '账号安全';
const accountSecurityIcon = 'secured';

const privacyTitle = '隐私';
const privacyIcon = 'error-circle';

const dividerTitleClass = 'divider-demo__title';
const cellWrapperClass = 'cell-wrapper';

const pageBackgroundColor = '#f3f3f3';

// 使用上述变量替换源代码中的数据
const template = `
<t-navbar title="${navbarTitle}" class="navigation-title">
  <view slot="capsule" >
    <t-icon
      size="20"
      bind:tap="onBack"
      aria-role="button"
      aria-label="返回"
      name="${backIcon}"
      class="custom-capsule"/></view>
</t-navbar>


<view class="${dividerTitleClass}"></view>
<view class="${cellWrapperClass}">
  <t-cell title="${generalSettingTitle}" hover arrow >
    <t-icon name="${generalSettingIcon}" slot="left-icon" color="#0052d9"></t-icon></t-cell>
  <t-cell title="${notificationSettingTitle}" hover arrow>
    <t-icon name="${notificationSettingIcon}" slot="left-icon" color="#0052d9"></t-icon></t-cell></view>

<view class="${dividerTitleClass}"></view>
<view class="${cellWrapperClass}">
  
  <t-cell title="${darkModeTitle}"  hover arrow >
  <t-icon name="${darkModeIcon}" slot="left-icon" color="#0052D9"></t-icon></t-cell>
  <t-cell title="${fontSizeTitle}"  hover arrow> 
  <t-icon name="${fontSizeIcon}" slot="left-icon" color="#0052D9"></t-icon></t-cell>
  <t-cell title="${playSettingTitle}" leftIcon="${darkModeIcon}" hover arrow>
  <t-icon name="${playSettingIcon}" slot="left-icon" color="#0052D9"></t-icon></t-cell></view>
  
<view class="${dividerTitleClass}"></view>
<view class="${cellWrapperClass}">
<t-cell title="${accountSecurityTitle}" hover arrow >
<t-icon  name="${accountSecurityIcon}" slot="left-icon" color="#0052D9"></t-icon></t-cell>
<t-cell title="${privacyTitle}" hover arrow>
<t-icon  name="${privacyIcon}" slot="left-icon" color="#0052D9"></t-icon></t-cell></view>
page{
  background: ${pageBackgroundColor};
}

.${dividerTitleClass} {
    font-size: 28rpx;
    color: rgba(10, 10, 10, 0.6);
    padding: 16rpx 32rpx;
    line-height: 40rpx;
  }
.${cellWrapperClass}{
  padding-right: 25rpx; 
  padding-left: 25rpx; 
  border-radius: 40rpx;
  overflow: hidden;
  
}

.custom-capsule {
  height:24rpx;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:20rpx;
  
}
.custom-capsule__icon {
  flex: 1;
  position: relative;
  
}
.navigation-title {
  width: 36rpx;
  height: 26rpx;
  opacity: 1;
  color: #000000e6;
  font-size: 18rpx;
  font-weight: 600;
  font-family: "PingFang SC";
  line-height: 26rpx;
  text-align: center;
  font-size: 16px;
}
`;

console.log(template);


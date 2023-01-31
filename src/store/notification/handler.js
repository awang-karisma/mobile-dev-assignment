import notifee, { AndroidStyle } from '@notifee/react-native';

async function NotificationHandler({ image, price, title }) {
  // Notification in Android requires channel
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Order placed successfully',
    body: `Your ${title} are on the way! Billed for ${price}`,
    android: {
      channelId,
      style: { type: AndroidStyle.BIGPICTURE, picture: image },
    },
  });
}

export default NotificationHandler;

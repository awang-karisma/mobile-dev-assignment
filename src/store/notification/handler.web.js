async function NotificationHandler({ image, price, title }) {
  const notificationContent = {
    title,
    body: `Your ${title} are on the way! Billed for ${price}`,
    image,
  };
  if (!('Notification' in window)) {
    // eslint-disable-next-line no-alert
    alert(notificationContent.body);
    return;
  }
  const isNotificationAllowed = (await Notification.requestPermission()) === 'granted';
  if (!isNotificationAllowed) {
    // eslint-disable-next-line no-alert
    alert('Please give permission to send notification.');
    return;
  }
  Notification('Order placed successfully', {
    body: notificationContent.body,
    icon: notificationContent.image,
  });
}

export default NotificationHandler;

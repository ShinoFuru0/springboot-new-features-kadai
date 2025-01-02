const stripe = Stripe('pk_test_51QNaYMC7xSmMs4vIRz6zTrtD90QMSypdTF60W9leYHBrPgCTKbvfqk0GUbR6fLVN3JgA86eYrVNayc0Z5kKXYiUr003Jedzt51');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });

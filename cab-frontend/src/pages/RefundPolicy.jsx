const RefundPolicy = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>

      <p>Refunds are processed based on cancellation timing.</p>

      <ul className="list-disc ml-6 mt-3">
        <li>Eligible refunds processed within 5–7 working days</li>
        <li>No refund for last-minute cancellations</li>
        <li>No refund for incomplete trips due to customer reasons</li>
      </ul>

      <p className="mt-4">Refunds will be credited to original payment method.</p>
    </div>
  );
};

export default RefundPolicy;
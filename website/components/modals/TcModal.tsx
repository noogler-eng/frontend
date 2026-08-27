'use client';

export default function TcModal({
  setIsshow,
}: {
  setIsshow: (value: boolean) => void;
}) {
  return (
    <div>
      <p>random shit</p>
      <option value="terms-and-conditions">Terms and Conditions</option>
      <button
        onClick={() => {
          localStorage.setItem("isTncAccessed", "1");
          setIsshow(false);
        }}
      >
        Accept
      </button>
    </div>
  );
}

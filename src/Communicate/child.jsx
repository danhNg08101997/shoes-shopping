export default function Child(props) {
  const { data, onResetUserName } = props;

  const handleResetUserName = () => {
    const userNameReset = "Cybersoft";
    onResetUserName(userNameReset);
  };

  return (
    <div>
      <h1>* Child Component</h1>
      <p>Username: {data}</p>
      <button
        className="text-white bg-red-500 rounded-lg py-2.5"
        onClick={handleResetUserName}
      >
        Reset Username
      </button>
    </div>
  );
}

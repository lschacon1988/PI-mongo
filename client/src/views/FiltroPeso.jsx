import { useDispatch } from "react-redux";
import { filterpeso } from "../store/action";

export default function FiltroPeso() {
  const dispatch = useDispatch();
  const handlePeso = (e) => {
    e.preventDefault();
    dispatch(filterpeso());
  };
  return <button onClick={handlePeso}> filtyro peso</button>;
}

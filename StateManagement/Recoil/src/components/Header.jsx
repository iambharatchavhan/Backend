  import React from "react";
  import { useRecoilState, useRecoilValue } from "recoil";
  import { networkAtom, messages, jobs, notifications ,totalNotifications} from "../States/atom";

  const Header = () => {
    
    // Only want value
    const networkValue = useRecoilValue(networkAtom);
    const jobsValue = useRecoilValue(jobs);
    const notificationsValue = useRecoilValue(notifications);
    // want both value and setFunction to update value
    const [message, setMessage] = useRecoilState(messages);
    // just want setFunction => setRecoilState()
    const totalCount = useRecoilValue(totalNotifications)
    // console.log(notificationsValue)


    return (
      <>
      <div>
        <div>Connections:{networkValue >= 100 ? "99+" : networkValue}</div>
        <div>Jobs:{jobsValue}</div>
        <div>Notifications:{notificationsValue >= 99 ? "99+" : notificationsValue}</div>
        <div>Messages:{message}</div>
        <button onClick={() => setMessage(message + 1)}>Update</button>
      </div>
      <button>TotalCount:{totalCount >= 100 ? "99+" : totalCount}</button>

      </>

    );
  };





  export default Header;

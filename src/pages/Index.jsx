import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to the Chat App</h1>
      <Button onClick={() => navigate("/chat")}>Go to Chat</Button>
    </div>
  );
};

export default Index;
export const mockData = Array.from({ length: 100 }, (_, index) => {
  const gender = index % 2 === 0 ? "men" : "women";
  return {
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@mail.com`,
    avatar: `https://randomuser.me/api/portraits/${gender}/${index % 99}.jpg`,
    role: index % 3 === 0 ? "Admin" : "User",
    status: index % 2 === 0 ? "Active" : "Inactive",
    createdAt: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };
});

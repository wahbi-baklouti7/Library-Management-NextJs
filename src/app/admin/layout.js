import SideBar from "@/components/adminComponents/sideBar";
export default function AdminLayout({ children }) {
return (
<div className="row mt-4">
<div className="col-md-2">
<SideBar />
</div>
<div className="col-md-10">
{children}
</div>
</div>
)
}

import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Pages/Dashboard';
import AddSale from '../Components/Pages/AddSale/AddSale';

const Abc = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/product/category" element={CategoryComponent} />
      <Route path="/product/list" element={ListComponent} />
      <Route path="/product/addservices" element={AddServicesComponent} />
      <Route path="/purchase/purchaselist" element={PurchaseListComponent} />
      <Route path="/purchase/addpurchase" element={AddPurchaseComponent} /> */}
      {/* <Route path="/sale/salelist" element={SaleListComponent} /> */}
      <Route path="/sale/addsale" element={<AddSale />} />
      {/* <Route path="/sale/discountcard" element={DiscountCardComponent} />
      <Route path="/expense/excategory" element={ExCategoryComponent} />
      <Route path="/expense/exlist" element={ExListComponent} />
      <Route path="/expense/addexpense" element={AddExpenseComponent} />
      <Route path="/transfer/trlist" element={TrListComponent} />
      <Route path="/transfer/addtransfer" element={AddTransferComponent} />
      <Route path="/return/sales" element={SalesReturnComponent} />
      <Route path="/return/purchases" element={PurchaseReturnComponent} />
      <Route path="/account/alist" element={AListComponent} />
      <Route path="/account/addaccount" element={AddAccountComponent} />
      <Route path="/account/balancesheet" element={BalanceSheetComponent} />
      <Route path="/account/accstatement" element={AccStatementComponent} />
      <Route path="/setting/permission" element={PermissionComponent} />
      <Route path="/setting/company" element={CustomerListnent} />
      <Route path="/setting/customerlist" element={Component} />
      <Route path="/setting/addcustomer" element={AddCustomerComponent} />
      <Route path="/setting/vendorlist" element={VendorListComponent} />
      <Route path="/setting/addvendor" element={AddVendorComponent} />
      <Route path="/setting/userprofile" element={UserProfileComponent} /> */}
    </Routes>

  );
};

export default Abc;

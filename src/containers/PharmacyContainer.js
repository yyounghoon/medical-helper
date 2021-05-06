import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PharmacyList from "../components/PharmacyList/PharmacyList";
import { getPharmacy } from "../modules/pharmacy";

const PharmacyContainer = () => {
  const { lat, lon } = useSelector((state) => state.position);
  const pharmacyListData = useSelector((state) => state.pharmacy.pharmacyList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPharmacy(lat, lon));
  }, [dispatch, lat, lon]);
  return <PharmacyList data={pharmacyListData} />;
};

export default PharmacyContainer;

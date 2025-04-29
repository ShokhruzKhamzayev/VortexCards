'use client';

import Spinner from '@/components/ui/spinner';
import { ParamValue } from 'next/dist/server/request/params';
import { redirect, useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectPage() {
  const {numId} = useParams()
 
  useEffect(() => {
    fetchGeneratedNumId(numId)
  }, [])

  function fetchGeneratedNumId(numId: ParamValue) {
    fetch(`https://vortexcards.onrender.com/api/generate-num-ids?filters[numId][$eq]=${numId}&populate=*`)
      .then((res) => res.json())
      .then((data) => {
        if(data.data.length < 1) {
          redirect('/')
        } else {
          if(data.data[0]?.organization) {
            redirect(`/organization/${data.data[0]?.organization.slug}`)
          } else if(data.data[0]?.individual) {
            redirect(`/individual/${data.data[0]?.individual.slug}`)
          }
        }
      })
  }
  return (
    <div>
      <Spinner/>
    </div>
  );
}

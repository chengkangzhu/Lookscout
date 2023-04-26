import React ,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {

	useEffect(() => {
		AOS.init({ duration:1000 });
		AOS.refresh();
	}, []);
	
	return (
		<div class="accordion" id="faq-section"  data-aos="fade-up">
			<div class="accordion-item accordion-item-head">
				<h2 className="faq-head">
					Authentification Issues
					<p>Porttitor nec est nisi, id nunc.</p>
				</h2>
				<span>New</span>
			</div>

			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseOne"
						aria-expanded="true"
						aria-controls="panelsStayOpen-collapseOne"
					>
						<div className="button-question">
							Mi est diam hendrerit ut ipsum, sodales aliquam
							mauris neque.
							<div className="button-updated-time">
								Updated last week
							</div>
						</div>
					</button>
				</h2>
				<div
					id="panelsStayOpen-collapseOne"
					class="accordion-collapse collapse"
					data-bs-parent="#faq-section"
				>
					<div class="accordion-body">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi quibusdam tempora, voluptatum explicabo nesciunt
						veniam necessitatibus culpa voluptatibus accusamus harum
						suscipit quaerat. Illo consectetur atque temporibus
						ratione modi cumque commodi, obcaecati nostrum incidunt
						doloribus saepe at fugiat ex. Explicabo pariatur eveniet
						earum harum suscipit error! Totam repellat, soluta ullam
						delectus commodi expedita ipsum doloribus pariatur
						cupiditate quam qui illo consectetur. Blanditiis ea esse
						quos provident distinctio fuga a nisi. Molestiae quae
						voluptatibus provident unde. Ipsam voluptatem animi
						neque. Quod, perspiciatis.
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseTwo"
						aria-expanded="false"
						aria-controls="panelsStayOpen-collapseTwo"
					>
						<div className="button-question">
							Cras vitae, scelerisque tortor augue.
							<div className="button-updated-time">
								Updated today
							</div>
						</div>
					</button>
				</h2>
				<div
					id="panelsStayOpen-collapseTwo"
					class="accordion-collapse collapse"
					data-bs-parent="#faq-section"
				>
					<div class="accordion-body">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi quibusdam tempora, voluptatum explicabo nesciunt
						veniam necessitatibus culpa voluptatibus accusamus harum
						suscipit quaerat. Illo consectetur atque temporibus
						ratione modi cumque commodi, obcaecati nostrum incidunt
						doloribus saepe at fugiat ex. Explicabo pariatur eveniet
						earum harum suscipit error! Totam repellat, soluta ullam
						delectus commodi expedita ipsum doloribus pariatur
						cupiditate quam qui illo consectetur. Blanditiis ea esse
						quos provident distinctio fuga a nisi. Molestiae quae
						voluptatibus provident unde. Ipsam voluptatem animi
						neque. Quod, perspiciatis.
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseThree"
						aria-expanded="false"
						aria-controls="panelsStayOpen-collapseThree"
					>
						<div className="button-question">
							Venenatis malesuada turpis sit integer felis rhoncus
							dictum eget ut.
							<div className="button-updated-time">
								Updated 2 days ago
							</div>
						</div>
					</button>
				</h2>
				<div
					id="panelsStayOpen-collapseThree"
					class="accordion-collapse collapse"
					data-bs-parent="#faq-section"
				>
					<div class="accordion-body">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi quibusdam tempora, voluptatum explicabo nesciunt
						veniam necessitatibus culpa voluptatibus accusamus harum
						suscipit quaerat. Illo consectetur atque temporibus
						ratione modi cumque commodi, obcaecati nostrum incidunt
						doloribus saepe at fugiat ex. Explicabo pariatur eveniet
						earum harum suscipit error! Totam repellat, soluta ullam
						delectus commodi expedita ipsum doloribus pariatur
						cupiditate quam qui illo consectetur. Blanditiis ea esse
						quos provident distinctio fuga a nisi. Molestiae quae
						voluptatibus provident unde. Ipsam voluptatem animi
						neque. Quod, perspiciatis.
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseFour"
						aria-expanded="false"
						aria-controls="collapseFour"
					>
						<div className="button-question">
							Pretium ultricies donec non mollis senectus lectus
							libero tellus.
							<div className="button-updated-time">
								Updated 3 days ago
							</div>
						</div>
					</button>
				</h2>
				<div
					id="collapseFour"
					class="accordion-collapse collapse"
					data-bs-parent="#faq-section"
				>
					<div class="accordion-body">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi quibusdam tempora, voluptatum explicabo nesciunt
						veniam necessitatibus culpa voluptatibus accusamus harum
						suscipit quaerat. Illo consectetur atque temporibus
						ratione modi cumque commodi, obcaecati nostrum incidunt
						doloribus saepe at fugiat ex. Explicabo pariatur eveniet
						earum harum suscipit error! Totam repellat, soluta ullam
						delectus commodi expedita ipsum doloribus pariatur
						cupiditate quam qui illo consectetur. Blanditiis ea esse
						quos provident distinctio fuga a nisi. Molestiae quae
						voluptatibus provident unde. Ipsam voluptatem animi
						neque. Quod, perspiciatis.
					</div>
				</div>
			</div>

			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseFive"
						aria-expanded="false"
						aria-controls="collapseFive"
					>
						<div className="button-question">
							Elit massa amet aenean ultrices vitae placerat
							augue.
							<div className="button-updated-time">
								Updated 4 days ago
							</div>
						</div>
					</button>
				</h2>
				<div
					id="collapseFive"
					class="accordion-collapse collapse"
					data-bs-parent="#faq-section"
				>
					<div class="accordion-body">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi quibusdam tempora, voluptatum explicabo nesciunt
						veniam necessitatibus culpa voluptatibus accusamus harum
						suscipit quaerat. Illo consectetur atque temporibus
						ratione modi cumque commodi, obcaecati nostrum incidunt
						doloribus saepe at fugiat ex. Explicabo pariatur eveniet
						earum harum suscipit error! Totam repellat, soluta ullam
						delectus commodi expedita ipsum doloribus pariatur
						cupiditate quam qui illo consectetur. Blanditiis ea esse
						quos provident distinctio fuga a nisi. Molestiae quae
						voluptatibus provident unde. Ipsam voluptatem animi
						neque. Quod, perspiciatis.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
